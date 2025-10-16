#!C:\Users\adity\AppData\Local\Programs\Python\Python39\python.exe
print("Content-Type: text/html\r\n\r\n")    
import cgi
import mysql.connector
con=mysql.connector.connect(user="Aditya",password="Aditya@123",host="localhost",database="category")
cur=con.cursor()

f=cgi.FieldStorage() 
# print(f.getvalue("categname"))
# print(f.getvalue("catid"))

try:
    # url="select * from categoryadd where category_id="+f.getvalue("CcategnameId")
    url=f"select * from categoryadd where category_id = \"{f.getvalue('catid')}\""
    # print(url)
    cur.execute(url)
    res=cur.fetchall()
    if res == []:
        print("No Record Found")
    else:
        print('<table class="table  table-hover mb-0"> <thead class="bg-dark"> <tr class="text-right text-center" style="font-size:20px;"> <th scope="col" style="font-size: 11px; color: white;">#</th> <th scope="col" style="font-size: 11px; color: white;">Category_Id</th> <th scope="col" style="font-size: 11px; color: white;">Category_Name</th> <th scope="col" style="font-size: 11px; color: white;">Description</th> <th scope="col" style="font-size: 11px; color: white;">Date</th> <th scope="col" style="font-size: 11px; color: white;" class="text-center">Actions</th> </tr> </thead>')
        for a in res:
            print('<tbody> <tr class="text-center"><th scope="row">1</th><td>'+str(a[0])+'</td> <td>'+str(a[1])+'</td> <td>'+str(a[3])+'</td> <td>'+str(a[2])+'</td> <td> <a href="category-update.html" data-catid="'+str(a[0])+'" data-categname="'+str(a[1])+'" data-date="'+str(a[2])+'" data-description="'+str(a[3])+'" class="btn btn-success btn-sm mx-1 update"> <i class="bi bi-pencil-square pr-"></i> Update </a> <a href="delete-page.html" class="btn btn-danger btn-sm delete"> <i class="bi bi-trash3-fill pr-0 delete"></i> Delete </a> </td> </tr> </tbody>')
        print('</table>')
except:
    print("Error") 
    