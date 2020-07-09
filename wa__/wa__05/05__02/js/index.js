function submitFruites() {
    
    const fruites = $('input:checkbox[name="fruites"]:checked');
    
    var values = fruites.map(function(){
      return $(this).val();
    }).get();
    
    alert(values);
    
}