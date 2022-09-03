
// generic settings class that is initilized upon start
class Settings {

    constructor() {

        this.settings = []; // contains all the settings availiable
        this.groups = []; // contains each group and it's sub groups of settings
        this.opened = true; // variable to track whether the settings window is open
        this.button = document.getElementById('settingsButton'); // button element to open and close the settings window

    }

    // method to collapse all groups
    collapse() {

        for (let group of this.groups) {

            group.collapse();

        }

    }

    // method to add a setting to the settings
    addSetting(setting) {
        this.settings.push(setting);
    }

    // method to add a group to the settings groups
    addGroup(group) {
        this.groups.push(group);
    }

    // method to close the seetings window
    close() {

        for (let group of settings.groups) {
            group.hide(); // hide all settings groups from the user
        }
        settings.button.onclick = settings.open; // set the function to call on click in the settings button to be the open function
        settings.button.innerHTML = 'Settings' // change the text in the settings button to say "Settings"
        Group.showDiv(drinkButton); // show the new drink button using a static show method in the group class

    }

    // method to open the seetings window
    open() {

        for (let group of settings.groups) {
            group.show(); // show all settings groups to the user
        }
        settings.button.onclick = settings.close; // set the function to call on click in the settings button to be the close function
        settings.button.innerHTML = 'Save Settings' // change the text in the settings button to say "Save Settings"
        Group.hideDiv(drinkButton); // hide the new drink button using a static hide method in the group class

    }

}

let settings = new Settings(); // global instance of settings

// a generic setting that can be controlled by the user
class Setting {

    constructor(name, group) {

        // add settings to the setting instance
        settings.addSetting(this);
        // create the label to descibe the setting
        this.label = document.createElement('p');
        this.label.innerHTML = name;
    }

    // method to check if the setting is enabled
    isEnabled() {

        return this.element.value;

    }


}

// a specific setting that can be controlled by the user
class CheckboxSetting extends Setting {

    constructor(name, group, value) {

        super(name, group);
        // create the checkbox
        this.element = document.createElement('input');
        this.element.type = 'checkbox';
        this.element.checked = value;
        group.add(this.element);
        group.add(this.label);

    }

    // method to check if the setting is enabled
    isEnabled() {

        return this.element.checked;

    }

}

// a specific setting that can be set from 0-100
class PercentageSetting extends Setting {

    constructor(name, group, value) {

        super(name, group);
        // create the textbox
        this.element = document.createElement('input');
        this.element.type = 'number';
        this.element.value = value;
        this.element.min = 0;
        this.element.max = 100;
        group.add(this.element);
        group.add(this.label);

    }

    // method to check if the setting is enabled
    isEnabled() {

        return parseInt(this.element.value) > 0;

    }

}

// a generic group of settings containing a title and a array of elements
class Group {

    constructor(title, parent, isExpandable) {

        if (isExpandable == undefined) {
            isExpandable = false;
        }

        // adds the group to the settings
        settings.addGroup(this);

        // creates a div to store all the elements of the group
        this.div = document.createElement('div');
        this.div.className = 'group';

        // creates a title element
        this.title = document.createElement('p');
        this.title.className = 'title1';
        this.title.innerHTML = title;
        this.div.appendChild(this.title);

        // create elements for the exandable groups
        if (isExpandable) {
            this.expandButton = document.createElement('button');
            this.collapseButton = document.createElement('button');
            this.div.appendChild(this.expandButton);
            this.div.appendChild(this.collapseButton);
        }

        // creates a div for the non title element of the group
        this.elementDiv = document.createElement('div');
        this.elementDiv.className = 'group';
        this.div.appendChild(this.elementDiv);


        // store the value of where this group is expandable
        this.isExpandable = isExpandable;
        if (isExpandable) {
            this.expandButton.innerHTML = 'Expand';
            this.collapseButton.innerHTML = 'Collapse';
            this.expandButton.className = 'expand';
            this.collapseButton.className = 'expand';
            this.expandButton.onclick = this.buttonExpand;
            this.collapseButton.onclick = this.buttonCollapse;
            this.expandButton.id = String(settings.groups.length - 1);
            this.collapseButton.id = String(settings.groups.length - 1);
        }

        // adds group to the parent group if there is one
        if (parent) {

            this.parent = parent;
            this.parent.elementDiv.appendChild(this.div);
            this.title.className = 'title'.concat((parseInt(this.parent.title.className.slice(-1))+1).toString());
        } else {
            // attach the div to the document body
            document.body.appendChild(this.div);
        }

    }

    // a method for adding any element to the group
    add(element) {

        this.elementDiv.appendChild(element);

    }

    // a method for hiding this group from the user
    hide() {

        this.hideDiv(this.div);

    }

    // a method for showing this group to the user
    show() {

        this.showDiv(this.div);

    }

    // a metod to check if an element is hidden
    isHidden(ele) {

        return ele.style.display == 'none' || ele.style.display == '';

    }

    // a method for hidding an element
    hideElement(ele) {
        ele.style.display = 'none';
    }

    static hideElement(ele) {
        ele.style.display = 'none';
    }

    // a method for showing an element
    showElement(ele) {
        ele.style.display = 'block';
    }

    static showElement(ele) {
        ele.style.display = 'block';
    }

    // a method for hiding a div
    hideDiv(ele) {
        ele.style.display = 'none';
    }

    static hideDiv(ele) {
        ele.style.display = 'none';
    }

    // a method for showing a div
    showDiv(ele) {
        if (ele.className == 'group') {
            ele.style.display = 'block';
        } else {
            ele.style.display = 'inline';
        }

    }

    static showDiv(ele) {
        if (ele.className == 'group') {
            ele.style.display = 'block';
        } else {
            ele.style.display = 'inline';
        }

    }

    buttonExpand() {

            settings.groups[parseInt(this.id)].expand();

    }

    expand() {

        if (this.isExpandable) {

            this.showDiv(this.elementDiv);

        }
    }

    buttonCollapse() {

            settings.groups[parseInt(this.id)].collapse();


    }

    collapse() {

        if (this.isExpandable) {

            this.hideDiv(this.elementDiv);

        }

    }

}
