#!C:\Users\adity\AppData\Local\Programs\Python\Python39\python.exe
print("Content-Type: text/html\r\n\r\n")    
import cgi
import mysql.connector  
db=mysql.connector.connect(host="localhost",user="Aditya",password="Aditya@123",database="service")
cur =db.cursor()

f=cgi.FieldStorage()
# print(f.getvalue("SId"))
# print(f.getvalue("mode"))
# print(f.getvalue("sername"))  
try:
    url="select * from serviceadd where service_id="+f.getvalue("SId")
    cur.execute(url)
    res=cur.fetchall()
    if res == []:
        print("No Record Found")
    else:
        print('<table class="table table-striped table-hover  mb-0"> <thead class="bg-dark" style="color:white;"><tr class="text-center"><th style="font-size:11px;">#</th> <th style="font-size:11px;">Service ID</th> <th style="font-size:11px;">Category</th> <th style="font-size:11px;">Event Name</th> <th style="font-size:11px;">Description</th> <th style="font-size:11px;">Action</th> </tr> </thead>')
        for a in res:
            print('<tbody> <tr class="text-center"><td>1</td> <td>'+str(a[0])+'</td> <td>'+str(a[1])+'</td> <td>'+str(a[2])+'</td> <td>'+str(a[3])+'</td> <td> <a href="..//examples/services-update.html"><button data-SId="'+str(a[0])+'" data-mode="'+str(a[1])+'" data-eventname="'+(a[2])+'" data-description="'+str(a[3])+'" class="btn btn-success btn-sm mx-1 update"><i class="bi bi-pencil-square pr-1"></i>Update</button></a><button class="btn btn-danger btn-sm delete"><i class="bi bi-trash3-fill pr-1"></i>Delete</button> </td> </tr></tbody>')
        print('</table>')
except:
    print("Error")  