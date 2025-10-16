#!C:\Users\adity\AppData\Local\Programs\Python\Python39\python.exe
print("Content-Type: text/html\r\n\r\n")    
import cgi
import mysql.connector  
db=mysql.connector.connect(host="localhost",user="Aditya",password="Aditya@123",database="venue")
cur =db.cursor()

f=cgi.FieldStorage()
try:
    url="select * from venueadd where venue_id="+f.getvalue("VId")
    cur.execute(url)
    res=cur.fetchall()
    if res == []:
        print("No Record Found")
    else:
        print('<table class="table  table-hover mb-0"> <thead class="thead-dark"><tr class="text-right"><th scope="col" style="font-size: 11px; color: white;">#</th><th scope="col" style="font-size: 11px; color: white;">Venue Id</th><th scope="col" style="font-size: 11px; color: white;">Venue Name</th><th scope="col" style="font-size: 11px; color: white;">Address</th><th scope="col" style="font-size: 11px; color: white;">State</th><th scope="col" style="font-size: 11px; color: white;">Distict</th><th scope="col" style="font-size: 11px; color: white;">Pincode</th><th scope="col" style="font-size: 11px; color: white;">Max Capacity</th><th scope="col" style="font-size: 11px; color: white;">Contact</th><th scope="col" style="font-size: 11px; color: white;">Alternate Contact</th><th scope="col" style="font-size: 11px; color: white;">Gallery</th><th scope="col" style="font-size: 11px; color: white;" class="text-center">Actions</th></tr></thead>')
        for a in res:
            print('<tbody><tr class="text-right"><td>1</td><td>'+str(a[0])+'</td><td>'+str(a[1])+'</td><td>'+str(a[2])+'</td><td>'+str(a[3])+'</td><td>'+str(a[4])+'</td><td>'+str(a[5])+'</td><td>'+str(a[6])+'</td><td>'+str(a[7])+'</td><td>'+str(a[8])+'</td><td>'+str(a[9])+'</td><td><a href="venue-edit.html" data-VId="'+str(a[0])+'" data-venuename="'+str(a[1])+'" data-address="'+str(a[2])+'" data-state="'+str(a[3])+'" data-dist="'+str(a[4])+'" data-pincode="'+str(a[5])+'" data-capacity="'+str(a[6])+'" data-contact="'+str(a[7])+'" data-alt_cont="'+str(a[8])+'" data-gallery="'+str(a[9])+'" class="btn btn-success btn-sm mx-1 update"><i class="bi bi-pencil-square pr-"></i> Update</a><a href="delete-page.html" class="btn btn-danger btn-sm delete"><i class="bi bi-trash3-fill pr-0"></i> Delete</a></td></tr></tbody>')
        print('</table>')
except:
    print("Error")
# print("Hello")