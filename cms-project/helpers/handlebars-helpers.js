module.exports = {
    
    select: function (selected, options) {
        // console.log('It works.');
        /*  More Details 
            - selected: is value contain value 
            - options: ? 
            - fn(): 
            - Multile answer: https://stackoverflow.com/questions/13046401/how-to-set-selected-select-option-in-handlebars-template
        */ 
        return options.fn(this).replace(new RegExp(' value=\"' + selected + '\"'), '$&selected="selected"'); 
    }
}; 