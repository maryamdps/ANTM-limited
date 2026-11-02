migrate((app) => {
 try { app.findCollectionByNameOrId('trade_inquiries'); return; } catch (_) {}
 const c = new Collection({name:'trade_inquiries',type:'base',listRule:null,viewRule:null,createRule:'',updateRule:null,deleteRule:null,fields:[
 {name:'name',type:'text',required:true,max:150},
 {name:'email',type:'email',required:true},
 {name:'destination_port',type:'text',required:true,max:200},
 {name:'sectors',type:'select',maxSelect:5,values:['Furniture','Industrial Packaging','Electronics','Light Mobility','Wholesale Footwear']},
 {name:'requirements',type:'text',max:5000},
 {name:'division',type:'text',max:150},
 {name:'created',type:'autodate',onCreate:true,onUpdate:false},
 {name:'updated',type:'autodate',onCreate:true,onUpdate:true}
 ]}); app.save(c);
}, (app) => { const c = app.findCollectionByNameOrId('trade_inquiries'); app.delete(c); });
