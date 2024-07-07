from random import choice


class Map:
    def __init__(self):
        self.complite_map = []
        self.uncomplite_map = []


    def get_complite_map(self, level):
        level = int(level)

        if level > 3 or level < 1:
            return None

        with open(f"levels/level{level}", "r") as file_level:
            for i in range(9):
                file_level.readline()
                level_line = file_level.readline()
                self.complite_map.append([num for num in level_line if num.isdigit()])
        return self.complite_map
    
    def get_uncomplite_map(self, level:list, diff:int):
        self.diff_list = [i for i in range(diff + 1)]

        for i in range(9):
            new_line = []
            for j in range(9):
                new_line.append(level[i][j] if choice(self.diff_list) == 1 else " ")
            self.uncomplite_map.append(new_line)

        return self.uncomplite_map