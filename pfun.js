function printDiv(divId) {
    var divContent = document.getElementById(divId).innerHTML;  // Get content of the printableDiv

    // Create a new window to print the content
    var printWindow = window.open('', '', 'height=600,width=800');

    // Write the basic structure of the print page (HTML)
    printWindow.document.write('<html><head><title>Checklist</title>');

    // Copy over the link tags for external stylesheets (e.g., app.css)
    var linkTags = document.querySelectorAll('link[rel="stylesheet"]');
    linkTags.forEach(function(link) {
        printWindow.document.write('<link rel="stylesheet" href="' + link.href + '">');
    });

    // Add any inline <style> tags
    var styleTags = document.querySelectorAll('style');
    styleTags.forEach(function(style) {
        printWindow.document.write('<style>' + style.innerHTML + '</style>');
    });

    // Optionally, ensure Google Fonts are included (like Material Icons)
    var fontLink = document.querySelector('link[href^="https://fonts.googleapis.com"]');
    if (fontLink) {
        printWindow.document.write('<link href="' + fontLink.href + '" rel="stylesheet">');
    }

    const bodyClass = document.body.className || "";
    printWindow.document.write('</head><body class="' + bodyClass + '">');
    printWindow.document.write(divContent);  // Insert the content of the printableDiv
    printWindow.document.write('</body></html>');

    // Ensure the document is completely loaded before triggering print
    printWindow.document.close();  // Close the document stream to finalize the content
    printWindow.onload = function() {
        printWindow.print();  // Trigger the print dialog after the content is fully loaded
    };
}
