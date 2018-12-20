FROM mysql:5.7

ENV MYSQL_ROOT_PASSWORD secret
ENV MYSQL_USER luke
ENV MYSQL_PASSWORD skywalker
ENV MYSQL_DATABASE testdockercomp
EXPOSE 3306
COPY ./*.sql /docker-entrypoint-initdb.d/
