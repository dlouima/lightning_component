public with sharing class accountControler {

   @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(){
        return [SELECT Id, Name, Type, Industry FROM Account limit 5];

    }


   @AuraEnabled(cacheable=true)
   public static List<Account> filterAccountByType(string type){
       return [SELECT Id, Name, Type, Industry FROM Account where Type=:type limit 5];

   }

}
