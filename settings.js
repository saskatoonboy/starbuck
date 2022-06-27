
class Settings {

    constructor() {

        this.settings = [];
        this.groups = [];
        this.opened = true;
        this.button = document.getElementById('settingsButton');

    }

    collapse() {

        for (let group of this.groups) {

            group.collapse();

        }

    }

    addSetting(setting) {
        this.settings.push(setting);
    }

    addGroup(group) {
        this.groups.push(group);
    }

    close() {

        for (let group of settings.groups) {
            group.hide();
        }
        settings.button.onclick = settings.open;
        settings.button.innerHTML = 'Settings'
        Group.showDiv(drinkButton);

    }

    open() {

        for (let group of settings.groups) {
            group.show();
        }
        settings.button.onclick = settings.close;
        settings.button.innerHTML = 'Save Settings'
        Group.hideDiv(drinkButton);

    }

}

let settings = new Settings();

class Setting {

    constructor(name, group) {
        
        settings.addSetting(this);
        this.label = document.createElement('p');
        this.label.innerHTML = name;
        if (group) {
            group.add(this.label);
        } 

    } 

    isEnabled() {

        return this.element.value;

    }

}

class CheckboxSetting extends Setting {

    constructor(name, group, value) {

        super(name, group);
        this.element = document.createElement('input');
        this.element.type = 'checkbox';
        this.element.checked = value;

        group.add(this.element);

    }

    isEnabled() {

        return this.element.checked;

    }

}

class DrinkSetting extends CheckboxSetting {

    constructor(name, group, value) {
        
        if (typeof(group) == 'string') {
            group = new ExpandableGroup(group);
        }

        super(name, group, value);

    }

}

class Group {

    constructor(title) {

        settings.addGroup(this);
        this.div = document.createElement('div');
        this.elementDiv = document.createElement('div');
        this.title = document.createElement('p');
        this.title.className = 'title';
        this.title.innerHTML = title;
        this.div.appendChild(this.title);
        this.div.appendChild(this.elementDiv);
        document.body.appendChild(this.div);

    }

    add(element) {

        this.elementDiv.appendChild(element);

    }

    hide() {

        this.hideDiv(this.div);

    }

    show() {

        this.showDiv(this.div);

    }

    isHidden(ele) {
    
      return ele.style.display == 'none' || ele.style.display == '';
    
    }

    hideElement(ele) {
      ele.style.display = 'none';
    }

    static hideElement(ele) {
      ele.style.display = 'none';
    }
    
    showElement(ele) {
        ele.style.display = 'block';
    }
    
    static showElement(ele) {
        ele.style.display = 'block';
    }

    hideDiv(ele) {
      ele.style.display = 'none';
    }

    static hideDiv(ele) {
      ele.style.display = 'none';
    }
    
    showDiv(ele) {
        ele.style.display = 'inline';
      
    }
    
    static showDiv(ele) {
        ele.style.display = 'inline';
      
    }

}

class SubGroup extends Group {

    constructor(group, title)  {

        super(title);
        this.group = group;
        this.group.div.appendChild(this.div)


    }

}

class ExpandableSubGroup extends SubGroup {

    constructor(group, title) {

        super(group, title);
        this.expansionDiv = document.createElement('div');
        this.expandButton = document.createElement('button');
        this.collapseButton = document.createElement('button');
        this.group.div.removeChild(this.div);
        this.group.div.appendChild(this.expansionDiv);
        this.div.className = 'subGroup';
        this.expansionDiv.className = 'subGroup';
        title = this.div.children[0];
        title.className = 'subGroup';
        this.div.removeChild(title);
        this.expansionDiv.appendChild(this.title)
        this.expansionDiv.appendChild(this.expandButton);
        this.expansionDiv.appendChild(this.collapseButton);
        this.expansionDiv.appendChild(this.div);
        this.expandButton.innerHTML = 'Expand';
        this.collapseButton.innerHTML = 'Collapse';
        this.expandButton.className = 'expand';
        this.collapseButton.className = 'expand';
        this.expandButton.onclick = this.buttonExpand;
        this.collapseButton.onclick = this.buttonCollapse;
        this.expandButton.id = String(settings.groups.length-1);
        this.collapseButton.id = String(settings.groups.length-1);
        if (this.group instanceof ExpandableParentGroup) {
            this.group.registerChild(this);
        }

    }

    hide() {

        this.hideElement(this.expansionDiv);

    }

    show() {

        this.showElement(this.expansionDiv);

    }

    buttonExpand() {

        settings.groups[parseInt(this.id)].expand();

    }

    expand() {

        this.showDiv(this.div);

    }

    buttonCollapse() {

        settings.groups[parseInt(this.id)].collapse();

    }

    collapse() {

        this.hideDiv(this.div);

    }

}

class ExpandableGroup extends Group {

    constructor(title) {

        super(title);
        this.expansionDiv = document.createElement('div');
        this.expandButton = document.createElement('button');
        this.collapseButton = document.createElement('button');
        document.body.removeChild(this.div);
        document.body.appendChild(this.expansionDiv);
        this.div.className = 'group';
        this.expansionDiv.className = 'group';
        title = this.div.children[0];
        this.div.removeChild(title);
        this.expansionDiv.appendChild(this.title)
        this.expansionDiv.appendChild(this.expandButton);
        this.expansionDiv.appendChild(this.collapseButton);
        this.expansionDiv.appendChild(this.div);
        this.expandButton.innerHTML = 'Expand';
        this.collapseButton.innerHTML = 'Collapse';
        this.expandButton.className = 'expand';
        this.collapseButton.className = 'expand';
        this.expandButton.onclick = this.buttonExpand;
        this.collapseButton.onclick = this.buttonCollapse;
        this.expandButton.id = String(settings.groups.length-1);
        this.collapseButton.id = String(settings.groups.length-1);

    }

    hide() {

        this.hideElement(this.expansionDiv);

    }

    show() {

        this.showElement(this.expansionDiv);

    }

    buttonExpand() {

        settings.groups[parseInt(this.id)].expand();

    }

    expand() {

        this.showDiv(this.div);

    }

    buttonCollapse() {

        settings.groups[parseInt(this.id)].collapse();

    }

    collapse() {

        this.hideDiv(this.div);

    }

}

class ExpandableParentGroup extends ExpandableGroup {

    constructor(title) {

        super(title);
        this.selectButton = document.createElement('button');
        this.unselectButton = document.createElement('button');
        this.expansionDiv.removeChild(this.div);
        this.expansionDiv.appendChild(this.selectButton);
        this.expansionDiv.appendChild(this.unselectButton);
        this.expansionDiv.appendChild(this.div);
        this.selectButton.innerHTML = 'Select All';
        this.unselectButton.innerHTML = 'Unselect All';
        this.selectButton.className = 'expand';
        this.unselectButton.className = 'expand';
        this.selectButton.onclick = this.buttonSelect;
        this.unselectButton.onclick = this.buttonUnselect;
        this.selectButton.id = String(settings.groups.length-1);
        this.unselectButton.id = String(settings.groups.length-1);
        this.children = [];

    }

    registerChild(group) {

        this.children.push(group);

    }

    select() {
        for (let child of this.children) {
            for (let element of child.elementDiv.children) {
                element.checked = true;
            }
        }
    }

    unselect() {
        for (let child of this.children) {
            for (let element of child.elementDiv.children) {
                element.checked = false;
            }
        }
    }

    buttonSelect() {

        settings.groups[parseInt(this.id)].select();

    }

    buttonUnselect() {

        settings.groups[parseInt(this.id)].unselect();

    }

}

class ExpandableMiddleGroup extends ExpandableSubGroup {

    constructor(title, group) {

        super(title, group);
        this.selectButton = document.createElement('button');
        this.unselectButton = document.createElement('button');
        this.expansionDiv.removeChild(this.div);
        this.expansionDiv.appendChild(this.selectButton);
        this.expansionDiv.appendChild(this.unselectButton);
        this.expansionDiv.appendChild(this.div);
        this.selectButton.innerHTML = 'Select All';
        this.unselectButton.innerHTML = 'Unselect All';
        this.selectButton.className = 'expand';
        this.unselectButton.className = 'expand';
        this.selectButton.onclick = this.buttonSelect;
        this.unselectButton.onclick = this.buttonUnselect;
        this.selectButton.id = String(settings.groups.length-1);
        this.unselectButton.id = String(settings.groups.length-1);
        this.children = [this];

    }

    registerChild(group) {

        this.children.push(group);

    }

    select() {
        for (let child of this.children) {
            for (let element of child.elementDiv.children) {
                element.checked = true;
            }
        }
    }

    unselect() {
        for (let child of this.children) {
            for (let element of child.elementDiv.children) {
                element.checked = false;
            }
        }
    }

    buttonSelect() {

        settings.groups[parseInt(this.id)].select();

    }

    buttonUnselect() {

        settings.groups[parseInt(this.id)].unselect();

    }

}
