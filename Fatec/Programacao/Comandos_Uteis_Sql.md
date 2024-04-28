
Derruba conexões com single_user e restaura para multi_user novamente novamente
ALTER DATABASE JoinRH_Alexandre SET SINGLE_USER WITH ROLLBACK IMMEDIATE
ALTER DATABASE JoinRH_Alexandre SET MULTI_USER

ver quem está conectado a base no momento do comando
sp_who2 
