import React, { useState } from "react";

function TCSampleArea() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [pdfUrl, setPdfUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      const url = URL.createObjectURL(file);
      setPdfUrl(url);
      setSelectedFile(file);
      setSubmitSuccess(false);
    } else {
      alert("Please select a PDF file");
    }
  };

  const handleRemove = () => {
    setSelectedFile(null);
    setPdfUrl("");
    setSubmitSuccess(false);
    // Reset the file input
    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput) {
      fileInput.value = "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      alert("Please select a file first");
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulate API call with setTimeout
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitSuccess(true);

      // Reset all states after successful submission
      setTimeout(() => {
        setSelectedFile(null);
        setPdfUrl("");
        setSubmitSuccess(false);
        // Reset the file input
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput) {
          fileInput.value = "";
        }
      }, 1000); // Wait 2 seconds after success message before resetting
    } catch (error) {
      alert("Error submitting file. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div
              className="card-header "
              style={{ background: "#245d51", padding: "13px" }}
            >
              <h4 className="mb-0" style={{ color: "white" }}>
                Transfer Certificate Viewer
              </h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                {/* File Upload Section */}
                <div className="mb-4">
                  <label className="form-label">Upload TC PDF</label>
                  <div className="input-group">
                    <input
                      type="file"
                      className="form-control"
                      accept=".pdf"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>

                {/* Success Message */}
                {submitSuccess && (
                  <div className="alert alert-success" role="alert">
                    File successfully submitted!
                  </div>
                )}

                {/* Submit & remove Button */}
                {selectedFile && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "10px",
                    }}
                  >
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={handleRemove}
                    >
                      Remove
                    </button>

                    <button
                      type="submit"
                      className="btn btn-success"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span
                            className="spinner-border spinner-border-sm me-2"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          Submitting...
                        </>
                      ) : (
                        "Submit TC"
                      )}
                    </button>
                  </div>
                )}

                {/* PDF Viewer */}
                {selectedFile && (
                  <>
                    <div
                      className="pdf-container mb-4"
                      style={{ height: "800px", border: "1px solid #dee2e6" }}
                    >
                      <iframe
                        src={pdfUrl}
                        width="100%"
                        height="100%"
                        style={{ border: "none" }}
                        title="TC PDF Viewer"
                      />
                    </div>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TCSampleArea;
