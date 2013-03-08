/*==========================================================

    RealSizer
    
    Author: Ashung Hung
    Mail: ashung.hung@gmail.com
    Dribbble: dribbble.com/ashung

==========================================================*/

#target photoshop
app.bringToFront();

// List of displays by pixel density:
// http://en.wikipedia.org/wiki/List_of_displays_by_pixel_density
// DPI Calculator / PPI Calculator:
// http://members.ping.de/~sven/dpi.html

var devicesDPI = [
{'title': 'iPhone 3GS, iPod Touch', 'dpi': 163, 'resolution': [320, 480], diagonal: 3.54},
{'title': 'iPhone 4, 4S, iPod Touch 4', 'dpi': 326, 'resolution': [640, 960], diagonal: 3.5},
{'title': 'iPhone 5, iPod Touch 5', 'dpi': 326, 'resolution': [640, 1136], diagonal: 4},
{'title': 'iPad, 2', 'dpi': 132, 'resolution': [1024, 768], diagonal: 9.7},
{'title': 'New iPad, 4', 'dpi': 264, 'resolution': [2048, 1536], diagonal: 9.7},
{'title': 'iPad Mini', 'dpi': 163, 'resolution': [1024, 768], diagonal: 7.9},

{'title': 'Kindle Fire', 'dpi': 169, 'resolution': [1024, 600], diagonal: 7},
{'title': 'Kindle Fire HD 7"', 'dpi': 216, 'resolution': [1280, 800], diagonal: 7},
{'title': 'Kindle Fire HD 8.9"', 'dpi': 254, 'resolution': [1280, 800], diagonal: 8.9},

{'title': 'Google Nexus 4', 'dpi': 320, 'resolution': [768, 1280], diagonal: 4.7},
{'title': 'Google Nexus 7', 'dpi': 216, 'resolution': [1280, 800], diagonal: 7},
{'title': 'Google Nexus S', 'dpi': 235, 'resolution': [480, 800], diagonal: 4},
{'title': 'Galaxy Nexus', 'dpi': 316, 'resolution': [720, 1280], diagonal: 4.65},
{'title': 'Nexus 10', 'dpi': 300, 'resolution': [2560, 1600], diagonal: 10.055},
{'title': 'Samsung Galaxy S III', 'dpi': 306, 'resolution': [720, 1280], diagonal: 4.8},
{'title': 'Nokia Lumia 920', 'dpi': 332, 'resolution': [1280, 768], diagonal: 4.5},

{'title': 'Xiaomi Mi1', 'dpi': 245, 'resolution': [480, 854], diagonal: 4},
{'title': 'Xiaomi Mi2', 'dpi': 341, 'resolution': [720, 1280], diagonal: 4.3}

];

var lang = {
    devicesLabel: {
        en: 'Choose Devices:',
        zh: '选择设备:'
    },
    btnRealSizeView: {
        en: 'New Window for Real Size View',
        zh: '新窗口显示实际尺寸'
    },
    btnRealSizePrint: {
        en: 'New Document for Real Size Printing',
        zh: '创建用于打印真实尺寸的图像'
    },
    about: {
        en: 'About',
        zh: '关于'
    },
    aboutText: {
        en: 'RealSizer help mobile UI designer to display their designs at real size on computer monitor, and printing at real size.\r\rFor more information, visite https://github.com/Ashung/realsizer\r\rRealSizer 1.0 Build 2013.03.08',
        zh: 'RealSizer用于让Mobile UI设计师在屏幕将设计显示为真实尺寸, 和创建用于打印真实尺寸的图像.\r\r详细信息请访问, https://github.com/Ashung/realsizer\r\rRealSizer 1.0 Build 2013.03.08'
    }
};

var layoutRes = 
"dialog {\
    text: 'RealSizer',\
    alignChildren: 'left',\
    devices: Group {\
        orientation: 'column',\
        alignChildren: 'left',\
        label: StaticText { text: '" + localize(lang.devicesLabel) + "'},\
        select: DropDownList { size: [300, 30] }\
    },\
    actions: Group {\
        orientation: 'column',\
        btnRealSizeView: Button { text: '" + localize(lang.btnRealSizeView) + "', size: [300, 30]}\
        btnRealSizePrint: Button { text: '" + localize(lang.btnRealSizePrint) + "', size: [300, 30]}\
    },\
    about: Panel {\
        orientation: 'column',\
        text: '" + localize(lang.about) + "',\
        size: [300, 150],\
        alignChildren: 'left',\
        aboutText: StaticText { characters: 38, properties: { multiline: true } }\
    }\
}";

var win = new Window(layoutRes);
    win.center();

var dpi;
var deviceDropDownList = win.devices.select;
var btnRealSizeView = win.actions.btnRealSizeView;
var btnRealSizePrint = win.actions.btnRealSizePrint;

for(var i = 0; i < devicesDPI.length; i ++) {
    var text = devicesDPI[i].title + ' (' + devicesDPI[i].resolution[0] + 'x' + devicesDPI[i].resolution[1] + 'px, ' + devicesDPI[i].diagonal + '", ' + devicesDPI[i].dpi + 'dpi)';
    deviceDropDownList.add('item', text);
}
deviceDropDownList.onChange = function() {
    dpi = devicesDPI[this.selection.index].dpi;
}
deviceDropDownList.selection = deviceDropDownList.items[0];

btnRealSizeView.onClick = function() {
    //alert(dpi);
    realSizeView(dpi);
}

btnRealSizePrint.onClick = function() {
    //alert(dpi);    
    realSizeForPrint(dpi);
}

    win.about.aboutText.text = localize(lang.aboutText);
    win.show();

function realSizeView(deviceDPI) {
    if(!documents.length) {
        return;
    }

    var originImageResolution = activeDocument.resolution;

    // Change Image dpi to device dpi
    setImageResolution(deviceDPI);

    // Arrange - New Window for...
    doMenuItem(cTID('NwVw'));

    // View - Print Size
    doMenuItem(cTID('PrnS'));
    
    // View - Show - None
    try {
        doMenuItem(sTID('showNone')); 
    } catch(e) {}

    // Recovery image dpi
    setImageResolution(originImageResolution);
}

function realSizeForPrint(deviceDPI) {
    if(!documents.length) {
        return;
    }

    // Select - All    
    activeDocument.selection.selectAll();
    
    // Edit - Copy Merged
    activeDocument.selection.copy(true);
    
    // Select - Deselect
    activeDocument.selection.deselect();
    
    // File - New...
    var width = UnitValue (activeDocument.width.as('px'), 'px');
    var height = UnitValue (activeDocument.height.as('px'), 'px');
    var name = activeDocument.name.slice(0, activeDocument.name.lastIndexOf('.')) + '_for_print';
    documents.add(width, height, deviceDPI, name, NewDocumentMode.RGB, DocumentFill.TRANSPARENT);
    
    // Edit - Paste
    activeDocument.paste();
}

function setImageResolution(x) {
    try {
        activeDocument.resizeImage(activeDocument.width, activeDocument.height, x);
    } catch(e) {}
}

function doMenuItem(item) {
    var desc = new ActionDescriptor();
    var ref = new ActionReference();
        ref.putEnumerated(cTID('Mn  '), cTID('MnIt'), item);
        desc.putReference(cTID('null'), ref);
    executeAction(cTID("slct"), desc, DialogModes.NO);
}

function cTID(s) {
    return app.charIDToTypeID(s);
}

function sTID(s) {
    return app.stringIDToTypeID(s);
}

function setScreenResolution(x) {
    // Preferences - Units & Rulers - New Document Preset Resolutions - Screen Resolution
    // a / 1in = a / 2.54cm = a/2.54 / 1cm
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
        ref1.putProperty(cTID('Prpr'), cTID('UntP'));
        ref1.putEnumerated(cTID('capp'), cTID('Ordn'), cTID('Trgt'));
        desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
        desc2.putUnitDouble(sTID("newDocPresetScreenResolution"), cTID('#Rlt'), Math.round(x / 2.54) * 72);
        desc1.putObject(cTID('T   '), cTID('UntP'), desc2);
    executeAction(cTID('setd'), desc1, DialogModes.NO);
}

function monitorPPI(widthInPixels, heightInPixels, diagonalInInches) {
    var a = widthInPixels,
        b = heightInPixels,
        c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    var ppi = Math.round(c / diagonalInInches);
    return ppi;
}