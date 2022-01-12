CREATE PROCEDURE postsCreateUpdate (
	IN _id INT(10),
    IN _title VARCHAR(30),
    IN _content TEXT(100),
    IN _created DATETIME
)

BEGIN

	IF _id = 0 THEN
		INSERT INTO post (title, content, created)
        VALUES (_title, _content, now());
        
        SET _id = LAST_INSERT_ID();
        
	ELSE
		UPDATE post
        SET
        title = _title,
        content = _content,
        created = NOW()
        WHERE id = _id;
        
	END IF;
    
    SELECT _id as id;

END