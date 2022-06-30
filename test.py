import os
with open('info.js', 'r+') as f:
    db = f.read()
    
    print(db)

    print('Выберите тип работы программы')
    print('Изменить - 0, Добавить новый объект - 1')
    t = int(input())

    if t == 0:
        # улучшить поиск (по объектам)
        print('Введите старый параметр')
        old = input()
        print('Введите новый параметр')
        new = input()
        db = db.replace(old, new, 1)
        print(db)
        # write data to file
        
    elif t == 1:
        print('Введите название объекта')
        num = input()
        print('Введите первый параметр')
        name = input()
        print('Введите второй параметр')
        tp = input()
        print('Введите тритий параметр')
        loc = input()

        new = '"'+ num + '"' + ':{"name":' + "'" + name + "'," + '"type":' + "'" + tp + "'," + '"location":' + "'" + loc + "',},}"
        f.seek(f.tell() - 2, os.SEEK_SET)
        f.write(new)
        
        
    else:
        print('error')


# Автоматическая перезагрузка страницы
'''
from selenium import webdriver
import urllib
import urllib2
driver = webdriver.Firefox()
driver.get("Your desired URL goes here...")
#now you can refresh the page!
driver.refresh()
'''
