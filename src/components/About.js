import React from "react";

export default function About(props) {
  return (
    <div class="accordion container my-3" id="accordionExample">
      <h1 className="my-3" style={{color: props.mode ==='dark'?'white':'#042743'}}>About</h1>
      <div className="container">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
              style={{color: props.mode ==='dark'?'white':'#404040', backgroundColor: props.mode ==='dark'?'#404040':'white'}}
            >
              Uppercase
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={{color: props.mode ==='dark'?'white':'#404040', backgroundColor: props.mode ==='dark'?'#404040':'white'}}>
              <strong>Uppercase Button</strong> It is a feature in the website
              which allows you to convert the provided text to Uppercase.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{color: props.mode ==='dark'?'white':'#404040', backgroundColor: props.mode ==='dark'?'#404040':'white'}}
            >
              Lowercase
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={{color: props.mode ==='dark'?'white':'#404040', backgroundColor: props.mode ==='dark'?'#404040':'white'}}>
              <strong>Uppercase Button</strong> It is a feature in the website
              which allows you to convert the provided text to Uppercase.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{color: props.mode ==='dark'?'white':'#404040', backgroundColor: props.mode ==='dark'?'#404040':'white'}}
            >
              Capitalize
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={{color: props.mode ==='dark'?'white':'#404040', backgroundColor: props.mode ==='dark'?'#404040':'white'}}>
              <strong>Capitalize Button</strong> It is a feature in the website
              which allows you to convert the provided text to Capital Case
              format.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFour">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
              style={{color: props.mode ==='dark'?'white':'#404040', backgroundColor: props.mode ==='dark'?'#404040':'white'}}
            >
              Remove Extra Spaces
            </button>
          </h2>
          <div
            id="collapseFour"
            class="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={{color: props.mode ==='dark'?'white':'#404040', backgroundColor: props.mode ==='dark'?'#404040':'white'}}>
              <strong>Remove Extra Spaces Button</strong>
              It is a feature in the website which allows you to remove the
              extra spaces in the provided text format.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFive">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
              style={{color: props.mode ==='dark'?'white':'#404040', backgroundColor: props.mode ==='dark'?'#404040':'white'}}
            >
              Speak Text
            </button>
          </h2>
          <div
            id="collapseFive"
            class="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={{color: props.mode ==='dark'?'white':'#404040', backgroundColor: props.mode ==='dark'?'#404040':'white'}}>
              <strong>Speak Text Button</strong> It is a feature in the website
              which allows you to read the provided text aloud on your machine.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingSix">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
              style={{color: props.mode ==='dark'?'white':'#404040', backgroundColor: props.mode ==='dark'?'#404040':'white'}}
            >
              Copy
            </button>
          </h2>
          <div
            id="collapseSix"
            class="accordion-collapse collapse"
            aria-labelledby="headingSix"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={{color: props.mode ==='dark'?'white':'#404040', backgroundColor: props.mode ==='dark'?'#404040':'white'}}>
              <strong>Copy Button</strong> Copies the text in the text feild to
              Clipboard.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
