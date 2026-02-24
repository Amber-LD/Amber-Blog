---
title: Git 指令文档
createTime: 2025/06/19 09:44:02
permalink: /memo/memo-git/
---


## ☘️ Git · 用户信息

1、配置个人的用户名称和电子邮件地址，这是为了在每次提交代码时记录提交者的信息：
```PowerShell
git config --global user.name "your name"             
git config --global user.email "email@example.com"
```

2、查看配置信息
```PowerShell
git config --list
```

## 🍁 Git · 创建仓库

1、在当前目录新建一个Git代码库

```PowerShell
git init
```

2、新建一个目录，将其初始化为Git代码库

```PowerShell
git init [project-name]
```

3、下载一个项目和它的整个代码历史

```PowerShell
git clone [url]
```

## 🍄 Git · 增删文件

1、添加指定文件到暂存区

```PowerShell
git add [file1] [file2] ...
```

2、添加指定目录到暂存区，包括子目录

```PowerShell
git add [dir]
```

3、添加当前目录的所有文件到暂存区

```PowerShell
git add .
```

4、添加每个变化前，都会要求确认，对于同一个文件的多处变化，可以实现分次提交

```PowerShell
git add -p
```

5、删除工作区文件，并且将这次删除放入暂存区

```PowerShell
git rm [file1] [file2] ...
```

6、停止追踪指定文件，但该文件会保留在工作区

```PowerShell
git rm --cached [file]
```

7、改名文件，并且将这个改名放入暂存区

```PowerShell
git mv [file-original] [file-renamed]
```

## 🌾 Git · 代码提交

1、提交暂存区到仓库区

```PowerShell
git commit -m [message]
```

2、提交工作区自上次commit之后的变化，直接到仓库区

```PowerShell
git commit -a
```

3、提交时显示所有diff信息

```PowerShell
git commit -v
```

4、使用一次新的commit，替代上一次提交  
如果代码没有任何新变化，则用来改写上一次commit的提交信息

```PowerShell
git commit --amend -m [message]
```

5、重做上一次commit，并包括指定文件的新变化

```PowerShell
git commit --amend [file1] [file2] ...
```

## 🌵 Git · 查看信息

1、显示有变更的文件

```PowerShell
git status
```

2、显示当前分支的版本历史

```PowerShell
git log
```

3、显示commit历史，以及每次commit发生变更的文件

```PowerShell
git log --stat
```

4、搜索提交历史，根据关键词

```PowerShell
git log -S [keyword]
```

5、显示某个commit之后的所有变动，每个commit占据一行

```PowerShell
git log [tag] HEAD --pretty=format:%s
```

6、显示某个commit之后的所有变动，其"提交说明"必须符合搜索条件

```PowerShell
git log [tag] HEAD --grep feature
```

7、显示某个文件的版本历史，包括文件改名

```PowerShell
git log --follow [file]
```

8、显示指定文件相关的每一次diff

```PowerShell
git log -p [file]
```

9、显示过去5次提交

```PowerShell
git log -5 --pretty --oneline
```

10、显示所有提交过的用户，按提交次数排序

```PowerShell
git shortlog -sn
```

11、显示指定文件是什么人在什么时间修改过

```PowerShell
git blame [file]
```

12、显示暂存区和工作区的差异

```PowerShell
git diff
```

13、显示暂存区和上一个commit的差异

```PowerShell
git diff --cached [file]
```

14、显示工作区与当前分支最新commit之间的差异

```PowerShell
git diff HEAD
```

15、显示两次提交之间的差异

```PowerShell
git diff [first-branch]...[second-branch]
```

16、显示今天你写了多少行代码

```PowerShell
git diff --shortstat "@{0 day ago}"
```

17、显示某次提交的元数据和内容变化

```PowerShell
git show [commit]
```

18、显示某次提交发生变化的文件

```PowerShell
git show --name-only [commit]
```

19、显示某次提交时，某个文件的内容

```PowerShell
git show [commit]:[filename]
```

20、显示当前分支的最近几次提交

```PowerShell
git reflog
```

## 🌴 Git · 分支操作

1、列出所有本地分支

```PowerShell
git branch
```

2、列出所有远程分支

```PowerShell
git branch -r
```

3、列出所有本地分支和远程分支

```PowerShell
git branch -a
```

4、新建一个分支，但依然停留在当前分支

```PowerShell
git branch [branch-name]
```

5、新建一个分支，并切换到该分支

```PowerShell
git checkout -b [branch]
```

6、新建一个分支，指向指定commit

```PowerShell
git branch [branch] [commit]
```

7、新建一个分支，与指定的远程分支建立追踪关系

```PowerShell
git branch --track [branch] [remote-branch]
```

8、切换到指定分支，并更新工作区

```PowerShell
git checkout [branch-name]
```

9、切换到上一个分支

```PowerShell
git checkout -
```

10、建立追踪关系，在现有分支与指定的远程分支之间

```PowerShell
git branch --set-upstream [branch] [remote-branch]
```

11、合并指定分支到当前分支

```PowerShell
git merge [branch]
```

12、选择一个commit，合并进当前分支

```PowerShell
git cherry-pick [commit]
```

13、删除分支

```PowerShell
git branch -d [branch-name]
```

14、删除远程分支

```PowerShell
git push origin --delete [branch-name]
```

## 🌳 Git · 标签操作

1、列出所有tag

```PowerShell
git tag
```

2、新建一个tag在当前commit

```PowerShell
git tag [tag]
```

3、新建一个tag在指定commit

```PowerShell
git tag [tag] [commit]
```

4、删除本地tag

```PowerShell
git tag -d [tag]
```

5、删除远程tag

```PowerShell
git push origin :refs/tags/[tagName]
```

6、查看tag信息

```PowerShell
git show [tag]
```

7、提交指定tag

```PowerShell
git push [remote] [tag]
```

8、提交所有tag

```PowerShell
git push [remote] --tags
```

9、新建一个分支，指向某个tag

```PowerShell
git checkout -b [branch] [tag]
```

## 🍂 Git · 远程同步

1、下载远程仓库的所有变动

```PowerShell
git fetch [remote]
```

2、显示所有远程仓库

```PowerShell
git remote -v
```

3、显示某个远程仓库的信息

```PowerShell
git remote show [remote]
```

4、增加一个新的远程仓库，并命名

```PowerShell
git remote add [shortname] [url]
```

5、取回远程仓库的变化，并与本地分支合并

```PowerShell
git pull [remote] [branch]
```

6、允许不相关历史提交,并强制合并

```PowerShell
git pull origin master --allow-unrelated-histories
```

7、上传本地指定分支到远程仓库

```PowerShell
git push [remote] [branch]
```

8、强行推送当前分支到远程仓库，即使有冲突

```PowerShell
git push [remote] --force
```

9、推送所有分支到远程仓库

```PowerShell
git push [remote] --all
```

## 🌿 Git · 撤销操作

1、恢复暂存区的指定文件到工作区

```PowerShell
git checkout [file]
```

2、恢复某个commit的指定文件到暂存区和工作区

```PowerShell
git checkout [commit] [file]
```

3、恢复暂存区的所有文件到工作区

```PowerShell
git checkout .
```

4、重置暂存区的指定文件，与上一次commit保持一致，但工作区不变

```PowerShell
git reset [file]
```

5、重置暂存区与工作区，与上一次commit保持一致

```PowerShell
git reset --hard 
```

6、重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变

```PowerShell
git reset [commit]
```

7、重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致

```PowerShell
git reset --hard [commit]
```

8、重置当前HEAD为指定commit，但保持暂存区和工作区不变

```PowerShell
git reset --keep [commit]
```

9、新建一个commit，用来撤销指定commit  
后者的所有变化都将被前者抵消，并且应用到当前分支

```PowerShell
git revert [commit]
```

10、暂时将未提交的变化移除，稍后再移入

```PowerShell
git stash
git stash pop
```

## 🍀 Git · 忽略文件

::: card title="ignore文件配置" icon="noto:coin"
①、以斜杠“/”开头表示目录；

②、以星号“*”通配多个字符；

③、以问号“?”通配单个字符

④、以方括号“[]”包含单个字符的匹配列表；

⑤、以叹号“!”表示不忽略(跟踪)匹配到的文件或目录；

此外，git 对于 .ignore 配置文件是按行从上到下进行规则匹配的，意味着如果前面的规则匹配的范围更大，则后面的规则将不会生效；
:::