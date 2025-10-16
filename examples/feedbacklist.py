#!C:\Users\adity\AppData\Local\Programs\Python\Python39\python.exe
print("Content-Type: text/html\r\n\r\n")    
import cgi
import mysql.connector  
db=mysql.connector.connect(host="localhost",user="Aditya",password="Aditya@123",database="feedback")
cur =db.cursor()

f=cgi.FieldStorage()
# print(f.getvalue("eventname"))
# print(f.getvalue("custname"))

try:
    # url="select * from feedbackadd where event_name="+f.getvalue("eventname")
    url=f"select * from feedbackadd where event_name = \"{f.getvalue('eventname')}\""
    # print(url)
    cur.execute(url)
    res=cur.fetchall()
    if res == []:
        print("No Record Found")
    else:
        print('<table class="table table-striped  table-hover mb-0"> <thead class="bg-dark"> <tr class="text-center text-center" style="font-size:20px;"> <th scope="col" style="font-size: 11px; color: white;">Feedback Id</th> <th scope="col" style="font-size: 11px; color: white;">Event Name</th> <th scope="col" style="font-size: 11px; color: white;">Customer Name</th> <th scope="col" style="font-size: 11px; color: white;">Rating</th> <th scope="col" style="font-size: 11px; color: white;">Feedback</th> </tr> </thead>')
        for a in res:
            print('<tbody> <tr class="text-center"> <td>'+str(a[0])+'</td> <td>'+str(a[1])+'</td> <td>'+str(a[2])+'</td> <td>'+str(a[3])+'</td> <td>'+str(a[5])+'</td> </tr></tbody>')
        print('</table>')
except:
    print("Error") 