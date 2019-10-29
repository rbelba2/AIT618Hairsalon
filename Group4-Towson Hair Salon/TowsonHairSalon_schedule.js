var a = MindFusion.scheduling-vsdoc;
var calendar = new a.Calendar(document.getElementById("calendar");
calendar.theme ="blue";
calendar.selectionEnd.addEventListener(handleSelection);
calendar.headerClick.addEventListener(handleHeaderClick);
calendar.render();

function handleHeaderClick(sender, args)
{
if (sender.currentView === a.CalendarView.Timetable)
{
sender.date = sender.timetableSettings.dates.items()[0];
}
}
function handleSelection(sender, args)
{
if(render.currentView ==== a.CalendarView.SingleMonth)
{

args.cancel = true;
var start = args.startTime;
var end = args.endTime;

sender.timetableSettings.dates.clear();

while(start < end)
{
sender.timetableSettings.dates.add(start);
start = a.DateTime.addDays(start, 1);
}
