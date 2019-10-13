var wordpos = require("wordpos")

var sentence = "President Obama woke up Monday facing a Congressional defeat that many in both parties believed could hobble his presidency."
var extraction_result = keyword_extractor.extract(sentence,{
language:"english",                                                    
remove_digits: true,                                                   
return_changed_case:true,                                                  
remove_duplicates: false
});
