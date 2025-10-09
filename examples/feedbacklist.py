#!C:\Users\adity\AppData\Local\Programs\Python\Python39\python.exe
print("Content-Type: text/html\r\n\r\n")    
import cgi

f=cgi.FieldStorage()
print(f.getvalue("eventname"))
print(f.getvalue("custname"))