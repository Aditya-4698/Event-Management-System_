#!C:\Users\adity\AppData\Local\Programs\Python\Python39\python.exe
print("Content-Type: text/html\r\n\r\n")    
import cgi
import mysql.connector
con=mysql.connector.connect(user="Aditya",password="Aditya@123",host="localhost",database="event")
cur=con.cursor()

f=cgi.FieldStorage()
# print(f.getvalue("EId"))
# print(f.getvalue("venuename"))
# print(f.getvalue("SId"))

try:
    url="select * from eventadd where event_id="+f.getvalue("EId")
    # print(url)
    cur.execute(url)
    res=cur.fetchall()
    if res == []:
        print("No Record Found")
    else:
        print('<table class="table table-hover  mb-0"> <thead class="bg-dark"><tr class="text-right"><th scope="col" style="font-size: 11px; color: white;">#</th> <th scope="col" style="font-size: 11px; color: white;">Event_Id</th> <th scope="col" style="font-size: 11px; color: white;">Event_Name</th> <th scope="col" style="font-size: 11px; color: white;">Customer_id</th> <th scope="col" style="font-size: 11px; color: white;">Venue_id</th> <th scope="col" style="font-size: 11px; color: white;">Service_id</th> <th scope="col" style="font-size: 11px; color: white;">Cost</th>  <th scope="col" style="font-size: 11px; color: white;">Event_date</th> <th scope="col" style="font-size: 11px; color: white;">Start_date</th> <th scope="col" style="font-size: 11px; color: white;">End_date</th> <th scope="col" style="font-size: 11px; color: white;">start_time</th> <th scope="col" style="font-size: 11px; color: white;">End_time</th> <th scope="col" style="font-size: 11px; color: white;">Participant</th> <th scope="col" style="font-size: 11px; color: white;">description</th>  <th scope="col" style="font-size: 11px; color: white;" class="text-center">Actions</th> </tr> </thead>')
        for a in res:
            print('<tbody> <tr class="text-center"> <td>1</td> <td>'+str(a[0])+'</td> <td>'+str(a[1])+'</td> <td>'+str(a[2])+'</td> <td>'+str(a[3])+'</td> <td>'+str(a[4])+'</td> <td>'+str(a[5])+'</td> <td>'+str(a[6])+'</td> <td>'+str(a[7])+'</td> <td>'+str(a[8])+'</td> <td>'+str(a[9])+'</td> <td>'+str(a[10])+'</td> <td>'+str(a[11])+'</td> <td>'+str(a[12])+'</td> <td> <a href="Events-update.html" data-EId="'+str(a[0])+'" data-eventname="'+str(a[1])+'" data-CId="'+str(a[2])+'" data-VId="'+str(a[3])+'" data-SId="'+str(a[4])+'"data-Cost="'+str(a[5])+'" data-Evtdate="'+str(a[6])+'" data-Sdate="'+str(a[7])+'" data-Edate="'+str(a[8])+'" data-Stime="'+str(a[9])+'" data-Etime="'+str(a[10])+'" data-capacity="'+str(a[11])+'" data-description="'+str(a[12])+'" class="btn btn-success btn-sm mx-1 update"><i class="bi bi-pencil-square pr-"></i> Update </a> <a href="delete-page.html" class="btn btn-danger btn-sm delete"> <i class="bi bi-trash3-fill pr-0"></i> Delete </a> </td> </tr></tbody>')
        print('</table>')
except:
    print("Error")  
