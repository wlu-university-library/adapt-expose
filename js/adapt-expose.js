define([
    "core/js/adapt",
    "core/js/models/itemsComponentModel",
    "./ExposeView"
], function(Adapt, ItemsComponentModel, ExposeView) {

    return Adapt.register("expose", {
        view: ExposeView,
        model: ItemsComponentModel
    });

});
