#!C:\Users\adity\AppData\Local\Programs\Python\Python39\python.exe
print("Content-Type: text/html\r\n\r\n")    
import cgi

f=cgi.FieldStorage()

print(f.getvalue("PId"))
print(f.getvalue("EId"))
print(f.getvalue("custname"))
print(f.getvalue("Tdate"))  
