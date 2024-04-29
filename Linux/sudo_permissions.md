run shell with sudo commands - https://www.tecmint.com/run-shell-scripts-with-sudo-command-in-linux/

useful sudoers config - https://www.tecmint.com/sudoers-configurations-for-setting-sudo-in-linux/
https://www.tecmint.com/su-vs-sudo-and-how-to-configure-sudo-in-linux/

criar um usuario sudo
https://www.cyberciti.biz/faq/how-to-create-a-sudo-user-on-ubuntu-linux-server/
sudo adduser <username>
sudo usermod -aG sudo <username> ou sudo usermod -aG wheel <username>
list all users
cat /etc/passwd
awk -F: '$3 >= 1000 && $1 != "nobody" {print $1}' /etc/passwd

https://unix.stackexchange.com/questions/113754/allow-user1-to-su-user2-without-password/115090#115090
https://askubuntu.com/questions/294736/run-a-shell-script-as-another-user-that-has-no-password
