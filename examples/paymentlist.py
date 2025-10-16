#!C:\Users\adity\AppData\Local\Programs\Python\Python39\python.exe
print("Content-Type: text/html\r\n\r\n")    
import cgi
import mysql.connector  
db=mysql.connector.connect(host="localhost",user="Aditya",password="Aditya@123",database="payment")
cur =db.cursor()

f=cgi.FieldStorage()

# print(f.getvalue("PId"))
# print(f.getvalue("EId"))
# print(f.getvalue("custname"))
# print(f.getvalue("Tdate"))

try:
    url="select * from paymentadd where payment_id="+f.getvalue("PId")
    cur.execute(url)
    res=cur.fetchall()
    if res == []:
        print("No Record Found")
    else:
        print('<table class="table table-striped table-hover  mb-0"><thead class="bg-dark" style="color:white;"><tr class="text-center"><th style="font-size:11px;">#</th> <th style="font-size:11px;">Payment ID</th> <th style="font-size:11px;">Event id</th> <th style="font-size:11px;">Customer Name</th> <th style="font-size:11px;">Paid Amount</th><th style="font-size:11px;">Dues Amount</th><th style="font-size:11px;">Pay Mode</th><th style="font-size:11px;">Payment Status</th><th style="font-size:11px;">Transaction</th><th style="font-size:11px;">Balance</th> <th style="font-size:11px;">Action</th> </tr> </thead>')
        for a in res:
            print('<tbody> <tr class="text-center"><td>1</td> <td>'+str(a[0])+'</td> <td>'+str(a[1])+'</td> <td>'+str(a[2])+'</td> <td>'+str(a[3])+'</td> <td>'+str(a[4])+'</td><td>'+str(a[5])+'</td><td>'+str(a[6])+'</td><td>'+str(a[7])+'</td><td>'+str(a[8])+'</td> <td> <a href="..//examples/payment-update.html"><button data-PId="'+str(a[0])+'" data-EId="'+str(a[1])+'" data-custname="'+str(a[2])+'" data-amt="'+str(a[3])+'" data-Damt="'+str(a[4])+'" data-mode="'+str(a[5])+'" data-Status="'+str(a[6])+'" data-Tdate="'+str(a[7])+'" data-balance="'+str(a[8])+'"class="btn btn-success btn-sm mx-1 update"><i class="bi bi-pencil-square pr-1"></i>Update</button></a> <button class="btn btn-danger btn-sm"><i class="bi bi-trash3-fill pr-1"></i>Delete</button> </td> </tr></tbody>')
        print('</table>')
except:
    print("Error")  
