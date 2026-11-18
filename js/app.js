$(function() {
  $('#nav-search-select').change(function() {
    var selectedText = $(this).find('option:selected').text();
    $('#nav-search').find('.nav-search-label').html(selectedText);
  });
});

// Preserve the image paths so the original assets work when added to img/.
for (const image of document.querySelectorAll('#promo img, #products img')) {
  const showUnavailable = () => {
    const notice = document.createElement('span');
    notice.className = 'image-unavailable';
    notice.textContent = 'Image unavailable';
    image.replaceWith(notice);
  };

  if (image.complete && image.naturalWidth === 0) {
    showUnavailable();
  } else {
    image.addEventListener('error', showUnavailable, { once: true });
  }
}
