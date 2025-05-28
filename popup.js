document.addEventListener('DOMContentLoaded', function () {
  chrome.runtime.sendMessage({ type: "GET_DOMAIN" }, function(response) {
    const domain = response.domain;
    // console.log(domain)
    if (!domain) {
      document.getElementById('domain').textContent = "Page has an invalid URL";
    };
    new QRious({
      element: document.getElementById('qr'),
      value: domain,
      size: 180
    });

    document.getElementById('domain').textContent = domain;
  });
});
