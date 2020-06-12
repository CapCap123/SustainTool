document.addEventListener('DOMContentLoaded', function() {

  chrome.tabs.query({active: true, currentWindow: true}, async function (tabs) {
    try {
      var currentURL = tabs[0].url;
      var urlArray = currentURL.split('/');
      var name = urlArray[2];

      var website = await extractName(name);

      var websiteArray = await website.split(".")
      var websiteName = websiteArray[0]
    } catch(error) {
      console.log(error);
    }
    console.log(websiteName);
    return websiteName

    async function extractName(name) {
      try{
        const www = "www."
        if (name.includes(www) == true) {
          var website = name.replace(www,"");
        } else {
          var website = name;
        }
  
      } catch(error) {
        console.log(error)
      }
      return website
    }

    //results = await checkBrand(websiteName);

    /*
    async function checkBrand(websiteName){
      try {
      var brand = {};
    
      brandname = websiteName
      console.log('check brandname: ' + brandname);
      brand.name = brandname;
      brand.website = websiteName;
    
      results = await checkBusinessData(brand)
    
      return(results)
    
      } catch(error) {
        console.log(error)
      }
    };
    */
  });


    var detailsButton = document.getElementById('details');
    detailsButton.addEventListener('click', function() {
      chrome.tabs.getSelected(null, function(tab) {      
        alert('thats not ready yet');
        console.log('button clicked');
      });
    }, false);
  }, false);