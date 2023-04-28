package com.example.probar.Repository;

import com.jpa.pruebahibernate.model.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface PersonaRepository extends JpaRepository <Persona, Long> {
    
}
