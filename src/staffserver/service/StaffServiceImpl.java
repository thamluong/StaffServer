package staffserver.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import staffserver.dao.StaffDao;
import staffserver.model.Company;
import staffserver.model.Staff;
import staffserver.model.StaffClient;

@Service
@Transactional
public class StaffServiceImpl implements StaffService {
	@Autowired
	private StaffDao staffDao;

	@Override
	public void check(){
		staffDao.check();
	}
	
	@Override
	public List<Company> getAllCompanies(){
		return staffDao.findAllCompanies();
	}
	
	@Override
	public List<Staff> getAll(){
		return staffDao.findAll();
	}
	
	@Override
	public Staff getDetail(int id){
		return staffDao.findDetail(id);
	}
	
	@Override
	public List<Staff> getStaffsByCompany(int id){
		return staffDao.findStaffsByCompany(id);
	}
	
	@Override
	public void insertOrUpdateToDb(List<StaffClient> staffs){
		staffDao.insertOrUpdateToDb(staffs);
	}
	
	@Override
	public int isExisted(String name, String info){
		return staffDao.isExisted(name, info);
	}
	
	@Override
	public void delete(String id){
		staffDao.delete(id);
	}
	
}
