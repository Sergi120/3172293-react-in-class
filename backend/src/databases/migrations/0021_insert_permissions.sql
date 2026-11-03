-- creamos los permisos de usuarios que faltaban
INSERT INTO permissions (permission_name, permission_codename, content_type_id)
VALUES
    ('Reportar usuarios', 'report_user', 1),
    ('Deshabilitar usuarios', 'disable_user', 1);