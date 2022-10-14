from turtle import pen
import pymysql
import wmi
import time
myWmi = wmi.WMI()
connection = pymysql.connect(
    host = "58.199.168.73",
    user = "root",
    password="114986550cld",
    db="AI4mater"
)
cursor = connection.cursor()

while True:
    CPU = myWmi.Win32_Processor()
    OS = myWmi.Win32_OperatingSystem()
    load_percentage = CPU[0].LoadPercentage
    load_percentage = 0 if load_percentage is None else load_percentage
    mem_percentage = 1 -  int(OS[0].FreePhysicalMemory) / int(OS[0].TotalVisibleMemorySize)
    a = str(load_percentage)
    b = str(mem_percentage*100)

    sql_cpu = "Insert into state values(0,'C',"+a+","+str(int(time.time()))+");"
    sql_mem = "Insert into state values(0,'M',"+b+","+str(int(time.time()))+");"
    print(sql_cpu)
    print(sql_mem)
    cursor.execute(sql_cpu)
    cursor.execute(sql_mem)
    connection.commit()

    time.sleep(10)
