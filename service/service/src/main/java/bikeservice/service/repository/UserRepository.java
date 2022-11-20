package bikeservice.service.repository;

import bikeservice.service.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    @Query(nativeQuery = true, value = "select concat('USR',REPLICATE(0,5-len(isNULL(max(cast(convert(varchar,substring(usercode,4,15)) as int)),0)+1)), isNULL(max(cast(convert(varchar,substring(usercode,4,15)) as int)),0)+1) as cd from sys_user where usercode like 'USR%'\n")
    public String getUserCode();

    @Query(nativeQuery = true,value =" select * from sys_user s where s.email= :email and s.password=:password  and s.status='No'  ")
    public User getByEmailID(@Param("email") String email,@Param("password") String password);


}
