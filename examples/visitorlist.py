#!C:\Users\adity\AppData\Local\Programs\Python\Python39\python.exe
print("Content-Type: text/html\r\n\r\n")    
import cgi
import mysql.connector  
db=mysql.connector.connect(host="localhost",user="Aditya",password="Aditya@123",database="visitor")
cur =db.cursor()

f=cgi.FieldStorage()

# print(f.getvalue("VistId"))
# print(f.getvalue("vistname"))
# print(f.getvalue("description"))

try:
    url="select * from visitoradd where visitor_id="+f.getvalue("VistId")
    cur.execute(url)
    res=cur.fetchall()
    if res == []:
        print("No Record Found")
    else:
        print('<table class="table table-striped table-hover  mb-0"><thead class="bg-dark" style="color:white;"><tr class="text-center"><th style="font-size:11px;">#</th><th style="font-size:11px;">Visitor ID</th> <th style="font-size:11px;">Name</th> <th style="font-size:11px;">Address</th><th style="font-size:11px;">State</th> <th style="font-size:11px;">Distict</th><th style="font-size:11px;">Pincode</th><th style="font-size:11px;">Contact</th><th style="font-size:11px;">Alternate Contact</th> <th style="font-size:11px;">Purpose</th>  </tr> </thead>')
        for a in res:
            print('<tbody> <tr class="text-center"><td>1</td> <td>'+str(a[0])+'</td> <td>'+str(a[1])+'</td> <td>'+str(a[2])+'</td><td>'+str(a[3])+'</td><td>'+str(a[4])+'</td><td>'+str(a[5])+'</td> <td>'+str(a[6])+'</td><td>'+str(a[7])+'</td> <td>'+str(a[8])+'</td> </tr></tbody>')
        print('</table>')
except:
    print("Error")