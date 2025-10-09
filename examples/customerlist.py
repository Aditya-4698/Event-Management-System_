#!C:\Users\adity\AppData\Local\Programs\Python\Python39\python.exe
print("Content-Type: text/html\r\n\r\n")    
import cgi

f=cgi.FieldStorage() 
print(f.getvalue("CId"))
print(f.getvalue("custname"))
print(f.getvalue("district"))
print(f.getvalue("address"))
print(f.getvalue("state"))
print(f.getvalue("pincode"))
print(f.getvalue("contact"))
   