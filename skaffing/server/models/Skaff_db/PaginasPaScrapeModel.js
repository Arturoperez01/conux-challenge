import PaginasPaScrapeModelGenerated from "./generated/PaginasPaScrapeModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = PaginasPaScrapeModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await PaginasPaScrapeModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...PaginasPaScrapeModelGenerated,
  ...customModel
};
