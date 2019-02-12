# esure-Marketing-Site
Vanilla js, html and css/bootstrap used along Handlebars.js library to display data that is retrieved from a contentful api, which is a headless cms. 

must have imports to make use of contentful and handlebars.js
    
    <script src="https://cdn.jsdelivr.net/npm/contentful@5.0.1/dist/contentful.browser.min.js"></script>
    <script src="//cdn.jsdelivr.net/npm/contentful@latest/dist/contentful.browser.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.11/handlebars.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.6/marked.min.js"></script>
    
    
Users can be added to a current space allowing mutiple people to edit the content of a space(you create a space for each website).


To add users: Organization Settings > Users(search user) > invite
    
 Contentful structure: 
 
 space - website name (a space contains all the content of the (website)
 
 
 contentModel - Page on a website: here you set the structure of the fields and there type, i.e text media etc
 
 
 contentType - Adding content to the model, will add content based on structure set from the contentModel.
 
 
 NOTE: Creating content is not enough, make sure to publish your changes in order for the api call to get them.
 
 
 
 contentful API docs: https://www.contentful.com/developers/docs/references/content-delivery-api/
 
 
 Contains range of diffrent api calls that can be made aswell as explaining how a space and all it content can be structured.
                       
                      
    
    
    
   
    
    
