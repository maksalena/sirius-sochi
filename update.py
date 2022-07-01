import os
import sys
import webbrowser
t = 1

while True:
    with open('info.js', 'r') as f:
        db = f.read()
        
    print(db)

    print('Выберите тип работы программы')
    print('Изменить - 1, Добавить новый объект - 2, Выход - 0')
    t = int(input())
    if t == 0:
        webbrowser.open('https://maksalena.github.io/sirius/', new=0)
        sys.exit()
        
    if t == 1:
        print('Введите старый параметр')
        old = input()
        print('Введите новый параметр')
        new = input()
        db = db.replace(old, new, 1)
        print(db)
        with open('info.js', 'w') as f:
            f.write(db)
            
    elif t == 2:
        print('Введите название объекта')
        num = input()
        while num in db:
            print('Такой объект уже есть! Попробуйте ещё раз.')
            print('Нажмите 0, чтобы выйти.')
            num = input()
            if num == '0':
                sys.exit()       
               
        print('Введите первый параметр')
        name = input()
        print('Введите второй параметр')
        tp = input()
        print('Введите тритий параметр')
        loc = input()
        
        new = '"'+ num + '"' + ':{"name":' + "'" + name + "'," + '"type":' + "'" + tp + "'," + '"location":' + "'" + loc + "',},\n}"
        with open('info.js', 'r+') as f:
            f.seek(0, 2)
            f.seek(f.tell() - 2, os.SEEK_SET)
            f.write(new)
            
            
    else:
        print('Ошибка! Нет такой команды.')

