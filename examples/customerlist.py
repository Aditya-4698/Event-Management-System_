#!C:\Users\adity\AppData\Local\Programs\Python\Python39\python.exe
print("Content-Type: text/html\r\n\r\n")    
import cgi
import mysql.connector
con=mysql.connector.connect(user="Aditya",password="Aditya@123",host="localhost",database="customer")
cur=con.cursor()

f=cgi.FieldStorage() 
# print(f.getvalue("CId"))
# print(f.getvalue("custname"))
# print(f.getvalue("district"))
# print(f.getvalue("address"))
# print(f.getvalue("state"))
# print(f.getvalue("pincode"))
# print(f.getvalue("contact"))
   
try:
    # url="select * from customeradd where customer_id="+f.getvalue("CId")
    url=f"select * from customeradd where customer_id = \"{f.getvalue('CId')}\""
    # print(url)
    cur.execute(url)
    res=cur.fetchall()
    if res == []:
        print("No Record Found")
    else:
        print('<table class="table table-striped table-hover  mb-0"> <thead class="bg-dark" style="color:white;"> <tr class="text-center"><th scope="col" style="font-size: 11px; color: white;">#</th> <th style="font-size:11px;">Customer ID</th> <th style="font-size:11px;">Name</th><th style="font-size:11px;">Contact</th> <th style="font-size:11px;">Alt_contact</th> <th style="font-size:11px;">District</th> <th style="font-size:11px;">State</th><th style="font-size:11px;">Pincode</th> <th style="font-size:11px;">Address</th> <th style="font-size:11px;">Addhar no.</th>  <th style="font-size:11px;">Addhar.</th>  <th style="font-size:11px;">Action</th> </tr> </thead>')
        for a in res:
            print('<tbody> <tr class="text-center"><th scope="row">1</th> <td>'+str(a[0])+'</td> <td>'+str(a[1])+'</td> <td>'+str(a[2])+'</td> <td>'+str(a[3])+'</td> <td>'+str(a[4])+'</td> <td>'+str(a[5])+'</td> <td>'+str(a[6])+'</td> <td>'+str(a[7])+'</td> <td>'+str(a[8])+'</td>  <td>'+str(a[9])+'</td> <td> <a href="..//examples/customer-update.html" ><button data-CId="'+str(a[0])+'" data-custname="'+str(a[1])+'"data-contact="'+str(a[2])+'" data-alt_cont="'+str(a[3])+'"data-dist="'+str(a[4])+'" data-state="'+str(a[5])+'" data-pincode="'+str(a[6])+'" data-address="'+str(a[7])+'" data-adhar="'+str(a[8])+'" data-gallery="'+str(a[9])+'"  class="btn btn-success btn-sm mx-1 update"><i class="bi bi-pencil-square pr-1"></i>Update</button></a> <button class="btn btn-danger btn-sm delete"><i class="bi bi-trash3-fill pr-1"></i>Delete</button> </td> </tr></tbody>')
        print('</table>')
except:
    print("Error")  