import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

interface UseMapPopupProps {
  activePopupId: string | null;
  clickedLngLat: [number, number] | null;
  map: mapboxgl.Map | null;
  workerInfo: Record<string, any> | null;
  backendUrl: string;
  onClose: () => void;
}

const formatDate = (timestamp: string) => {
  return new Date(timestamp).toLocaleString();
};

const getStatusColor = (status: number) => {
  switch (status) {
    case 3:
      return "#FF0000";
    case 2:
      return "#11F4D1";
    case 1:
      return "#7C1DCE";
    case 0:
      return "#666";
    default:
      return "#666";
  }
};

const useMapPopup = ({
  activePopupId,
  clickedLngLat,
  map,
  workerInfo,
  backendUrl,
  onClose,
}: UseMapPopupProps) => {
  const popupRef = useRef<mapboxgl.Popup | null>(null);

  const formatCompletionRate = (rate: string) => {
    const formattedRate = parseFloat(rate).toFixed(2);
    return parseFloat(formattedRate) % 1 === 0
      ? parseInt(formattedRate) + "%"
      : formattedRate + "%";
  };

  useEffect(() => {
    if (!activePopupId || !clickedLngLat || !map || !workerInfo) return;

    if (popupRef.current) {
      popupRef.current.remove();
    }

    const renderMainContent = () => `
      <div class="popup-content main-content" style="z-index: 9999;">
        <div class="popup-header">
          <h4>Researcher ${parseInt(activePopupId) + 1}</h4>
          <hr/>
          <div class="status-section">
            ${
              workerInfo.state.research_topic
                ? `<p class="status">Researche topic: <span class="highlight">${workerInfo.state.research_topic}</span></p>
`
                : ""
            }
            <p class="status">Current Status: <span class="highlight">${workerInfo.state.current_status}</span></p>
            <p>Current Problem: <span class="highlight">${workerInfo.state.current_problem}</span></p>
            <p>Progress: <span class="highlight">${formatCompletionRate(workerInfo.research_progress.completion_rate)}</span></p>
            <p>Last Updated: <span class="highlight">${formatDate(workerInfo.timestamp)}</span></p>
          </div>
          <h4>Research Ideas (${workerInfo.state.completed_ideas}/${workerInfo.state.total_ideas})</h4>
        </div>
        <div class="popup-items">
          <div class="ideas-list">
            ${workerInfo.research_progress.ideas
              .map(
                (idea: {
                  status: number;
                  title: any;
                  paper_path: any;
                  id: any;
                  idea_description: any;
                }) => `
                <div class="idea-item">
                  <div class="idea-header">
                    <span class="status-dot" style="background: ${getStatusColor(idea.status)}"></span>
                    <span class="idea-title">${idea.title}</span>
                    ${
                      idea.paper_path
                        ? `<a href="${backendUrl}/file?idea_id=${idea.id}&worker_id=${activePopupId}" class="paper-link" target="_blank">View Paper</a>`
                        : `<span class="paper-link disabled">View Paper</span>`
                    }
                    <a href="#" class="paper-link review-button" data-id="${idea.id}">Review</a>
                  </div>
                  ${
                    idea.idea_description
                      ? `<div class="idea-description">${idea.idea_description}</div>`
                      : ""
                  }
                </div>
              `,
              )
              .join("")}
          </div>
        </div>
      </div>
    `;

    const renderReviewContent = (idea: any) => {
      const title = idea.title || "Untitled";
      const clarity = idea.review?.clarity ?? "N/A";
      const confidence = idea.review?.confidence ?? "N/A";
      const decision = idea.review?.decision ?? "N/A";
      const originality = idea.review?.originality ?? "N/A";
      const overall = idea.review?.overall ?? "N/A";
      const quality = idea.review?.quality ?? "N/A";
      const summary = idea.review?.summary || "No summary available.";
      const strengths = idea.review?.strengths || [];
      const weaknesses = idea.review?.weaknesses || [];
      const questions = idea.review?.questions || [];

      return `
        <div class="popup-content review-content">
          <div class="popup-header">
            <h4>${title}</h4>
            <hr />
            <div class="status-section">
              <p class="status">Clarity: <span class="highlight">${clarity}</span></p>
              <p class="status">Confidence: <span class="highlight">${confidence}</span></p>
              <p class="status">Decision: <span class="highlight">${decision}</span></p>
              <p class="status">Originality: <span class="highlight">${originality}</span></p>
              <p class="status">Overall: <span class="highlight">${overall}</span></p>
              <p class="status">Quality: <span class="highlight">${quality}</span></p>
            </div>
          </div>
          <div class="popup-items">
            <div class="ideas-list">
              <div class="idea-item">
                <div class="idea-description">
                  <p><strong>Summary:</strong> ${summary}</p>
                </div>
              </div>
              <div class="idea-item">
                <div class="idea-description">
                  <p><strong>Strengths:</strong></p>
                  <ul>
                    ${strengths.map((strength: string) => `<li>${strength}</li>`).join("")}
                  </ul>
                </div>
              </div>
              <div class="idea-item">
                <div class="idea-description">
                  <p><strong>Weaknesses:</strong></p>
                  <ul>
                    ${weaknesses.map((weakness: string) => `<li>${weakness}</li>`).join("")}
                  </ul>
                </div>
              </div>
              <div class="idea-item">
                <div class="idea-description">
                  <p><strong>Questions:</strong></p>
                  <ul>
                    ${questions.map((question: string) => `<li>${question}</li>`).join("")}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="popup-footer">
            <a href="#" class="paper-link back-button">← Back</a>
          </div>
        </div>
      `;
    };

    popupRef.current = new mapboxgl.Popup({
      maxWidth: "500px",
      closeOnClick: false,
    })
      .setLngLat(clickedLngLat)
      .setHTML(renderMainContent())
      .addTo(map);

    popupRef.current.on("close", () => {
      onClose();
      popupRef.current = null;
    });

    const popupElement = popupRef.current.getElement();
    popupElement?.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;

      if (target.classList.contains("review-button")) {
        event.preventDefault();

        const ideaId = target.getAttribute("data-id");
        const idea = workerInfo.research_progress.ideas.find(
          (idea: any) => idea.id === ideaId,
        );

        if (idea) {
          const mainContent = popupElement.querySelector(".main-content");
          if (mainContent) {
            mainContent.classList.add("slide-out");
          }

          setTimeout(() => {
            if (popupRef.current) {
              popupRef.current.setHTML(renderReviewContent(idea));
            }
          }, 300);
        }
      }

      if (target.classList.contains("back-button")) {
        event.preventDefault();

        const reviewContent = popupElement.querySelector(".review-content");
        if (reviewContent) {
          reviewContent.classList.add("slide-out-reverse");
        }

        setTimeout(() => {
          if (popupRef.current) {
            popupRef.current.setHTML(renderMainContent());
          }
        }, 300);
      }
    });
  }, [activePopupId, clickedLngLat, map, workerInfo, backendUrl, onClose]);

  return popupRef;
};

export default useMapPopup;

