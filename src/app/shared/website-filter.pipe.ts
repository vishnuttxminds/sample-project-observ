import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'websiteFilter',
})
export class WebsiteFilterPipe implements PipeTransform {
  transform(users: any[], domain: string): any[] {
    if (!users || !domain) return [];

    const filteredUsers = users.filter(user=> 
      user.website && user.website?.endsWith(domain)
    );
    console.log('Filtering user:', filteredUsers);
    return filteredUsers;
  }
}
