let menu_display = false;
let product_display = false;
let company_display = false;
let connect_display = false;

function show_menu(){
    document.getElementById("menu").style.display="flex";
    document.getElementById("logo-menu").src="images/icon-close.svg";
}
function hide_menu(){
    document.getElementById("menu").style.display="none";
    document.getElementById("logo-menu").src="images/icon-hamburger.svg";
}
function show_section(id){
    document.getElementById(id).style.display="flex";
}
function hide_section(id){
    document.getElementById(id).style.display="none";
}
function upright(id){
    document.getElementById(id).style.transform= 'scaleY(1)';
}
function upside(id){
    document.getElementById(id).style.transform= 'scaleY(-1)';
}
function light_font(id){
    document.getElementById(id).style.color = 'hsl(208, 19%, 54%)';
}
function dark_font(id){
    document.getElementById(id).style.color = 'hsl(208, 39%, 34%)';
}


function menu_action(id){
    if(id === 1){
        if (product_display) {
            hide_section('product-section');
            upright("product-arrow");
            dark_font('product-header');
        }
        else {
            show_section('product-section');
            upside("product-arrow");
            light_font('product-header')
        }
        product_display = !product_display;
    }
    else if(id === 2){
        if (company_display) {
            hide_section('company-section');
            upright("company-arrow")
            dark_font('company-header')
        }
        else {
            show_section('company-section');
            upside("company-arrow");
            light_font('company-header')

        }
        company_display = !company_display;
    }
    else if(id === 3){
        if (connect_display) {
            hide_section('connect-section');
            upright("connect-arrow")
            dark_font('connect-header')
        }
        else {
            show_section('connect-section');
            upside("connect-arrow");
            light_font('connect-header')
        }
        connect_display = !connect_display;

    }
    else
    {
        if (menu_display === false) {
            show_menu();
            menu_display = true;
        } else {
            hide_menu();
            menu_display = false;
        }
    }
}

function menu_action_desktop(id){
    if(id === 1){
        if (product_display) {
            hide_section('product-section-desktop');
            upright("product-arrow-desktop");

        }
        else {
            show_section('product-section-desktop');
            upside("product-arrow-desktop");

            hide_section('company-section-desktop');
            upright("company-arrow-desktop")
            hide_section('company-section-desktop');
            upright("company-arrow-desktop")
            company_display = false;
            connect_display = false;
        }
        product_display = !product_display;
    }
    else if(id === 2){
        if (company_display) {
            hide_section('company-section-desktop');
            upright("company-arrow-desktop")

        }
        else {
            show_section('company-section-desktop');
            upside("company-arrow-desktop");

            hide_section('product-section-desktop');
            upright("product-arrow-desktop");
            hide_section('connect-section-desktop');
            upright("connect-arrow-desktop")
            product_display = false;
            connect_display = false;
        }
        company_display = !company_display;
    }
    else if(id === 3){
        if (connect_display) {
            hide_section('connect-section-desktop');
            upright("connect-arrow-desktop")

        }
        else {
            show_section('connect-section-desktop');
            upside("connect-arrow-desktop");

            hide_section('company-section-desktop');
            upright("company-arrow-desktop");
            hide_section('product-section-desktop');
            upright("product-arrow-desktop");
            product_display = false;
            company_display = false;

        }
        connect_display = !connect_display;

    }
    else
    {
        if (menu_display === false) {
            show_menu();
            menu_display = true;
        } else {
            hide_menu();
            menu_display = false;
        }
    }
}