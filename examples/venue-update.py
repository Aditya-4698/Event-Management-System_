#!C:\Users\adity\AppData\Local\Programs\Python\Python39\python.exe
print("Content-Type: text/html\r\n\r\n")    
import cgi
import mysql.connector

con=mysql.connector.connect(user="Aditya",password="Aditya@123",host="localhost",database="venue")
cur=con.cursor()
# print(con)

f=cgi.FieldStorage()

# url="insert into venueadd(venue_id,venue_name,address,state,district,pincode,max_capacity,contact,alternate_contact,gallery) values(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"
# try:
#     print(f.getvalue("VId"))
#     print(f.getvalue("venuename"))
#     print(f.getvalue("address"))
#     print(f.getvalue("state"))
#     print(f.getvalue("dist"))
#     print(f.getvalue("pincode"))    
#     print(f.getvalue("capacity"))
#     print(f.getvalue("contact"))
#     print(f.getvalue("alt_cont"))   
#     print(f.getvalue("gallery"))
#     cur.execute(url,(f.getvalue("VId"),f.getvalue("venuename"),f.getvalue("address"),f.getvalue("state"),f.getvalue("dist"),f.getvalue("pincode"),f.getvalue("capacity"),f.getvalue("contact"),f.getvalue("alt_cont"),f.getvalue("gallery")))
#     con.commit()
#     print("Record inserted")
# except Exception as e:
#     print("Error:",e)   
VId=(f.getvalue("VId"))
venuename=(f.getvalue("venuename"))
address=(f.getvalue("address"))
state=(f.getvalue("state"))
dist=(f.getvalue("dist"))
pincode=(f.getvalue("pincode"))
capacity=(f.getvalue("capacity"))
contact=(f.getvalue("contact"))
alt_cont=(f.getvalue("alt_cont"))
gallery=(f.getvalue("gallery"))
try:
    url="update venueadd set venue_id=\'"+str(VId)+"\',venue_name=\'"+str(venuename)+"\',address=\'"+str(address)+"\',state=\'"+str(state)+"\',district=\'"+str(dist)+"\',pincode=\'"+str(pincode)+"\',max_capacity=\'"+str(capacity)+"\',contact=\'"+str(contact)+"\',alternate_contact=\'"+str(alt_cont)+"\',gallery=\'"+str(gallery)+"\' where venue_id=\'"+str(VId)+"\';"
    cur.execute(url)
    con.commit()
    print("Record updated successfully")
except Exception as e:
    print("Error:",e)