function showDetails(platformId) {
   
    alert("Details for platform with ID: " + platformId);
}

document.getElementById('searchInput').addEventListener('input', function () {
    var searchValue = this.value.toLowerCase();

    var catalogBoxes = document.getElementsByClassName('catalog-box');
    for (var i = 0; i < catalogBoxes.length; i++) {
        var platformInfo = catalogBoxes[i].getElementsByClassName('platform-info')[0];
        var platformName = platformInfo.getElementsByTagName('h2')[0].innerText.toLowerCase();
        var platformDescription = platformInfo.getElementsByTagName('p')[0].innerText.toLowerCase();

        if (platformName.includes(searchValue) || platformDescription.includes(searchValue)) {
            catalogBoxes[i].style.display = 'flex';
        } else {
            catalogBoxes[i].style.display = 'none';
        }
    }
});