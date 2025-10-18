#!C:\Users\adity\AppData\Local\Programs\Python\Python39\python.exe
print("Content-Type: text/html\r\n\r\n")    
import cgi
import mysql.connector
con=mysql.connector.connect(user="Aditya",password="Aditya@123",host="localhost",database="event_service")
cur=con.cursor()

f=cgi.FieldStorage()
# print(f.getvalue("ESId"))
# print(f.getvalue("SId"))
# print(f.getvalue("Cdate"))

try:
    # url="select * from event_serviceadd where event_serviceid="+f.getvalue("ESId")
    url=f"select * from event_serviceadd where event_serviceid = \"{f.getvalue('ESId')}\""
    # print(url)
    cur.execute(url)
    res=cur.fetchall()
    if res == []:
        print("No Record Found")
    else:
        print('<table class="table table-striped table-hover  mb-0"> <thead class="bg-dark" style="color:white;"> <tr class="text-center"> <th scope="col" style="font-size: 11px; color: white;">#</th><th style="font-size:11px;">Event Service ID</th> <th style="font-size:11px;">Service id</th> <th style="font-size:11px;">Created date</th> <th style="font-size:11px;">Action</th> </tr> </thead>')
        for a in res:
            print('<tbody> <tr class="text-center"><th scope="row">1</th> <td>'+str(a[0])+'</td> <td>'+str(a[1])+'</td> <td>'+str(a[2])+'</td> <td> <a href="examples/event_service-update.html"><button  data-ESId="'+str(a[0])+'" data-SId="'+str(a[1])+'" data-Cdate="'+str(a[2])+'" class="btn btn-success btn-sm mx-1 update"><i class="bi bi-pencil-square pr-1"></i>Update</button></a> <button class="btn btn-danger btn-sm delete"><i class="bi bi-trash3-fill pr-1"></i>Delete</button> </td> </tr></tbody>')
        print('</table>')
except:
    print("Error")  