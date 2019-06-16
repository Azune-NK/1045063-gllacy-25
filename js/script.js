var link = document.querySelector(".map-feedback-button"),
  overlay = document.querySelector(".wrapper-modal-feedback"),
  popup = document.querySelector(".modal-feedback"),
  close = popup.querySelector(".modal-feedback-close"),
  form = popup.querySelector("form"),
  feedbackName = popup.querySelector("[name=feedback-name]"),
  email = popup.querySelector("[name=feedback-email]"),
  feedbackInfo = popup.querySelector("[name=feedback-info]"),
  isStorageSupport = true,
  storageName = "",
  storageEmail = "";

try {
  storageName = localStorage.getItem("feedbackName");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup-show");
  overlay.classList.add("modal-feedback-overlay");

  if (storageName) {
    feedbackName.value = storageName;
  }

  if (storageEmail) {
    email.value = storageEmail;
  }

  if (!storageName) {
    feedbackName.focus();
  } else if (!storageEmail) {
    email.focus();
  } else {
    feedbackInfo.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup-show");
  popup.classList.remove("popup-error");
  overlay.classList.remove("modal-feedback-overlay");
});

form.addEventListener("submit", function (evt) {
  if (!feedbackName.value || !email.value || !feedbackInfo.value) {
    evt.preventDefault();
    popup.classList.remove("popup-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("popup-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("feedbackName", feedbackName.value);
      localStorage.setItem("email", email.value);
    }
  }
});
document.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("popup-show")) {
      popup.classList.remove("popup-show");
      popup.classList.remove("popup-error");
      overlay.classList.remove("modal-feedback-overlay");
    }
  }
});

/*  <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A7b7576fee9a57803f95c57367820772f396baf11f40e2ccab900d20d4720b1c8&amp;width=1200&amp;height=430&amp;lang=ru_RU&amp;scroll=true"></script> */
