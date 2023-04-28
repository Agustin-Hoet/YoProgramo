package com.example.probar.Service;

@Service
public class PersonaService implements IPersonaService {
    
    @Autowire
    private PersonaRepository persoRepository;
    
    @Override
    public List<Persona> getPersonas() {
        List<Persona> listaPersonas = persoRepository.findAll();
        return listaPersonas;
    }
    
    @Override
    public void savePersona(Persona perso) {
        persoRepository.save(perso);
    }
    
    @Override
    public void deletePersona(Long id) {
        persoRepository.deleteById(id);
    }
    
    @Override
    public Persona findPersona(Long id) {
        Persona perso = persoRepository.findById(id).orElse(null);
        return perso;
    }
    
}
