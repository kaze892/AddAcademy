var cl= document.getElementById('cl').value;
var courseList = cl.split('Study_course(');

document.writeln("<header class=\'ms-header ms-header-white\'>");
document.writeln("        <!--ms-header-white-->");
document.writeln("        <div class=\'container container-full\'>");
document.writeln("          <div class=\'ms-title\'>");
document.writeln("            <a href=\'/\'>");
document.writeln("               <img src=\'assets/img/logo.png\' alt=\'\'> ");
/*document.writeln("              <span>SU</span>");*/
/*document.writeln("              <h1 class=\'animated fadeInRight animation-delay-6\'>IT<span>JOB</span></h1>");
*/document.writeln("            </a>");
document.writeln("          </div>");
document.writeln("          <div class=\'header-right\'>");
document.writeln("            <div class=\'share-menu\'>");
document.writeln("              <ul class=\'share-menu-list\'>");
/*document.writeln("                <li class=\'animated fadeInRight animation-delay-3\'><a href=\'https://www.google.com/sharer.php' class=\'btn-circle btn-google\'><i class=\'zmdi zmdi-google\'></i></a></li>");*/
document.writeln("                <li class=\'animated fadeInRight animation-delay-2\'><a href=\'https://www.facebook.com/sharer.php' class=\'btn-circle btn-facebook\'><i class=\'zmdi zmdi-facebook\'></i></a></li>");
document.writeln("                <li class=\'animated fadeInRight animation-delay-1\'><a href=\'//twitter.com/share' class=\'btn-circle btn-twitter\'><i class=\'zmdi zmdi-twitter\'></i></a></li>");
document.writeln("              </ul>");
document.writeln("              <a href=\'javascript:void(0)\' class=\'btn-circle btn-circle-primary animated zoomInDown animation-delay-7\'><i class=\'zmdi zmdi-share\'></i></a>");
document.writeln("            </div>");
document.writeln("            <a href=\'./userInformation\' class=\'btn-circle btn-circle-primary no-focus animated zoomInDown animation-delay-8\' ><i class=\'zmdi zmdi-account\'></i></a>");
/*document.writeln("            <form class=\'search-form animated zoomInDown animation-delay-9\'>");
document.writeln("              <input id=\'search-box\' type=\'text\' class=\'search-input\' placeholder=\'Search...\' name=\'q\' />");
document.writeln("              <label for=\'search-box\'><i class=\'zmdi zmdi-search\'></i></label>");
document.writeln("            </form>");*/
document.writeln("            <a href=\'javascript:void(0)\' class=\'btn-ms-menu btn-circle btn-circle-primary ms-toggle-left animated zoomInDown animation-delay-10\'><i class=\'zmdi zmdi-menu\'></i></a>");
document.writeln("          </div>");
document.writeln("        </div>");
document.writeln("      </header>");
document.writeln("      <nav class=\'navbar navbar-expand-md  navbar-static ms-navbar ms-navbar-white\'style=\'margin-bottom:0\'>");
document.writeln("        <div class=\'container container-full\'>");
document.writeln("          <div class=\'navbar-header\'>");
document.writeln("            <a class=\'navbar-brand\' href=\'/\'>");
document.writeln("               <img src=\'assets/img/logo.png\' alt=\'\'>");
/*document.writeln("              <span>SU</span>");
document.writeln("              <span class=\'ms-title\'>IT<strong>JOB</strong></span>");*/
document.writeln("            </a>");
document.writeln("          </div>");
document.writeln("          <div class=\'collapse navbar-collapse\' id=\'ms-navbar\'>");
document.writeln("            <ul class=\'navbar-nav\'>");
document.writeln("              <li class=\'nav-item dropdown\'>");
document.writeln("                <a href=\'/\' class=\'dropdown-item\' >きききき </a>");
document.writeln("                ");
document.writeln("              </li>");

document.writeln("              <li class=\'nav-item dropdown\'>");
document.writeln("                <a href=\'#\' class=\'nav-link dropdown-toggle animated fadeIn animation-delay-7\' data-toggle=\'dropdown\' data-hover=\'dropdown\' role=\'button\' aria-haspopup=\'true\' aria-expanded=\'false\' data-name=\'page\'>くくくく<i class=\'zmdi zmdi-chevron-down\'></i></a>");
document.writeln("                <ul class=\'dropdown-menu\'>");
for(i = 1; i < courseList.length; i++) {
	var course = courseList[i];
	var courseDetail = course.split(',');
	var catrgory = courseDetail[1].slice(26);
	if (catrgory == 3) {
		var courseId = courseDetail[0].slice(16);
		var title = courseDetail[2].slice(7);
		document.writeln("                  <li class=\'dropdown-submenu\'>");
		document.writeln("                      <li><a class=\'dropdown-item\' href=\'detail?id=" + courseId + "\'>" + title +"</a></li>");
		document.writeln("                  </li>");
	}
}
document.writeln("                    </ul>");

document.writeln("              <li class=\'nav-item dropdown\'>");
document.writeln("                <a href=\'#\' class=\'nav-link dropdown-toggle animated fadeIn animation-delay-7\' data-toggle=\'dropdown\' data-hover=\'dropdown\' role=\'button\' aria-haspopup=\'true\' aria-expanded=\'false\' data-name=\'page\'>けけけけ<i class=\'zmdi zmdi-chevron-down\'></i></a>");
document.writeln("                <ul class=\'dropdown-menu\'>");
for(i = 1; i < courseList.length; i++) {
	var course = courseList[i];
	var courseDetail = course.split(',');
	var catrgory = courseDetail[1].slice(26);
	if (catrgory == 5) {
		var courseId = courseDetail[0].slice(16);
		var title = courseDetail[2].slice(7);
		document.writeln("                  <li class=\'dropdown-submenu\'>");
		document.writeln("                      <li><a class=\'dropdown-item\' href=\'detail?id=" + courseId + "\'>" + title +"</a></li>");
		document.writeln("                  </li>");
	}
}
document.writeln("                </ul>");

document.writeln("              <li class=\'nav-item dropdown\'>");
document.writeln("                <a href=\'#\' class=\'nav-link dropdown-toggle animated fadeIn animation-delay-7\' data-toggle=\'dropdown\' data-hover=\'dropdown\' role=\'button\' aria-haspopup=\'true\' aria-expanded=\'false\' data-name=\'page\'>ここここ<i class=\'zmdi zmdi-chevron-down\'></i></a>");
document.writeln("                <ul class=\'dropdown-menu\'>");
for(i = 1; i < courseList.length; i++) {
	var course = courseList[i];
	var courseDetail = course.split(',');
	var catrgory = courseDetail[1].slice(26);
	if (catrgory == 6) {
		var courseId = courseDetail[0].slice(16);
		var title = courseDetail[2].slice(7);
		document.writeln("                  <li class=\'dropdown-submenu\'>");
		document.writeln("                      <li><a class=\'dropdown-item\' href=\'detail?id=" + courseId + "\'>" + title +"</a></li>");
		document.writeln("                  </li>");
	}
}
document.writeln("                    </ul>");



document.writeln("              <li class=\'nav-item dropdown \'>");
document.writeln("                <a href=\'/bbsHomePage?condition=none\' class=\'dropdown-item\' >ささささ </a>");
document.writeln("                ");
document.writeln("              </li>");
document.writeln("              <li class=\'nav-item dropdown \'>");
document.writeln("                <a href=\'/videoList\' class=\'dropdown-item\' >コンテンツ </a>");
document.writeln("                ");
document.writeln("              </li>");
document.writeln("            </ul>");
document.writeln("          </div>");
/*document.writeln("          <a href=\'javascript:void(0)\' class=\'ms-toggle-left btn-navbar-menu\'><i class=\'zmdi zmdi-menu\'></i></a>");*/
document.writeln("        </div> <!-- container -->");
document.writeln("      </nav>");