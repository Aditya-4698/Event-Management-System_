#!C:\Users\adity\AppData\Local\Programs\Python\Python39\python.exe
print("Content-Type: text/html\r\n\r\n")    
import cgi
f=cgi.FieldStorage()
print(f.getvalue("VId"))
print(f.getvalue("venuename"))
print(f.getvalue("address"))
print(f.getvalue("state"))
print(f.getvalue("dist"))
print(f.getvalue("pincode"))    
print(f.getvalue("capacity"))
print(f.getvalue("contact"))
print(f.getvalue("alt_cont"))   
print(f.getvalue("gallery"))