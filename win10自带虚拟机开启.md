1搜索：启用或关闭Windows功能
2打开Hyper-V 功能，重启电脑
3在开始菜单栏找到window工具开始使用


【内网】网络配置，创建导入成功镜像后，点击电脑上的网络配置
设置IPV4配置如下
IP地址：192.168.0.1
子网掩码：255.255.255.0

进入到linux配置如下
[root@localhost /]#vi /etc/sysconfig/network-scripts/ifcfg-eth0
在配置文件中修改 BOOTPROTO=static，ONBOOT=yes，并添加如下内容：
IPADDR=192.168.0.130
NETMASK=255.255.255.0
GATEWAY=192.168.0.1
DNS1=192.168.0.1

其中IPADDR就是你用xhell的连接地址



【能连接到外网的配置】
1、打开Hyper-V 的管理器
2、打开虚拟机交换机管理器
3、新建虚拟网络交换机=》选择外部
4、虚拟机设置=》网络适配器=》选择刚创建的
5、ping www.baidu.com测试是否成功